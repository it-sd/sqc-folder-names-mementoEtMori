const newFolderName = function (folders) {

  
  if (folders.length === 0) {
    return "New Folder"
  } else if (folders[0] === "New Folder" && folders.length === 1) {
    return "New Folder (2)"
  } else {
  
      for (let i = folders.length; i > 0; i--) {
        let n = folders.length;
        if (folders[i] === "New Folder (" + (n) + ")") {
          return "New Folder (" + (n+1) + ")"
        } else {
          n++
        }
      
      }
      
    }
  
  }


console.log(newFolderName([]));
console.log(newFolderName(["New Folder"]));
console.log(newFolderName(["New Folder", "New Folder (2)"]));
console.log(newFolderName(["New Folder", "New Folder (2)", "New Folder (3)"]));


module.exports = { newFolderName }