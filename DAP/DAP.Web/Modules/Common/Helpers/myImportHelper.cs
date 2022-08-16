﻿using OfficeOpenXml;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;

namespace DAP.myImportHelper
{
    public static class myExtension
    {
        /// <summary>
        /// Easy access to pair valued
        /// </summary>
        /// <typeparam name="TKey">Key for pair</typeparam>
        /// <typeparam name="TValue">Value of Pair</typeparam>
        /// <param name="dictionary"> Dictionary being used </param>
        /// <param name="key"> Key being looked for</param>
        /// <returns></returns>
        [Pure]
        public static KeyValuePair<TKey, TValue> GetEntry<TKey, TValue>(this Dictionary<TKey, TValue> dictionary, TKey key)
        {
            var comparer = dictionary.Comparer;
            return dictionary.FirstOrDefault(p => comparer.Equals(p.Key, key));
        }
    }



    public class ExcelImportHelper
    {
        /// <summary>
        /// Compares the expected system headers against the imported headers. When a match is found
        /// it logs the header index location paired with the system header. If the imported header 
        /// does not match, it assigns a '-1' index location. 
        /// </summary>
        /// <param name="importedHeaders"> headers from import file</param>
        /// <param name="expectedHeaders">System headers expected in import file </param>
        /// <param name="myErrors"> Error Logger</param>
        /// <param name="exceptionHeaders"> Existing headers to ignore</param>
        /// <returns>Dictionary mapping of columns</returns>
        public static Dictionary<string, int> myExcelHeaderMap(List<string> importedHeaders, List<string> expectedHeaders, List<string> myErrors, List<string> exceptionHeaders)
        {
            List<int> columnMap = new List<int>();
            Dictionary<string, int> headerMap = new Dictionary<string, int>();
            string emessage = null;
            int x = -1;//counter            
            headerMap.Clear();
            for (int b = 0; b < expectedHeaders.Count; b++)
            {
                for (int a = 0; a < importedHeaders.Count; a++)
                {
                    if (importedHeaders[a] == expectedHeaders[b])
                    {
                        x = a;
                        emessage = null;
                        break;
                    }
                    else
                    {
                        for (int c = 0; c < exceptionHeaders.Count; c++)
                        {
                            emessage = "Column " + expectedHeaders[b] + " appears to be missing from the file";
                            if (exceptionHeaders[c] == expectedHeaders[b])
                            {
                                emessage = null;
                                break;
                            }
                        }
                        x = -1;
                    }
                }

                if (emessage != null)
                {
                    myErrors.Add(emessage);
                }
                headerMap.Add(expectedHeaders[b], x);
            }

            return headerMap;
        }
        /// <summary>
        /// Takes the row and column location given and returns the value from the worksheet given
        /// </summary>
        /// <param name="row">Row Address of Cell</param>
        /// <param name="col">Column Address Of Cell</param>
        /// <param name="worksheet">Worksheet being accessed</param>
        /// <returns>Excel Value at Cell Address</returns>
        public static object myExcelVal(int row, int col, ExcelWorksheet worksheet)
        {
            object myOut;
            if (col >= 0)
            {
                myOut = worksheet.Cells[row, col + 1].Value;
            }
            else
                myOut = null;
            return myOut;
        }

        public static bool validImportedVal(IUnitOfWork uow, string table, StringField field, string val)
        {           
            // prepared query
            var query = new SqlQuery()
            .Select(field.Name)
            .From(table)
            .Where(new Criteria(field.Name) == val)
            ;// DEBUG for query - Console.WriteLine(query.ToString());

            // execute query
            var result = uow.Connection.Query(query);
            var resultCount = result.ToList().Count;

            return (resultCount > 0) ? true : false;
        }

    } // class
}