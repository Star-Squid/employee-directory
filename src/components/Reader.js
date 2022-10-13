// Importing fs module to read the file 
import { readFileSync } from "fs"
const data = readFileSync("sample.csv", "utf8") // using 'utf8' encoding


// splitting the CSV by row as "\n" represents new row
let rows = data.split("\n") 

// Getting the attribute from the index 0 of the rows
const getAttribute = () => {
  return rows[0].split(',')
}

// Further splitting the Rows 
const getRowData = () => {
  let rowData = []
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',')
    rowData.push(row)
  }
  return rowData;
}


//  The CSV parser
const CSVToObject = () => {

    const attributes = getAttribute(data)
    const rowData = getRowData()
  
    let rowsObj = []
    for (let i = 0; i < rowData.length; i++) {
  
      let rowObj = {}
  
      for (let j = 0; j < rowData[i].length; j++) {
        rowObj[attributes[j]] = rowData[i][j]; // converting to object as attribute as key.
      }
  
      rowsObj.push(rowObj)
    }
  
    return rowsObj
  }
  
  let newData = CSVToObject()
  
  console.log(newData)