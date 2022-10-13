// document.getElementById('but').addEventListener('click',function(){
//     alert(document.getElementById('textArea').value);
// },false);

    let butOpenFile = document.getElementById('butOpenFile');
    let butSaveFile = document.getElementById('butSaveFile');
    let textArea = document.getElementById('textArea');

    async function writeFile(fileHandle, contents) {
      const writable = await fileHandle.createWritable();
      await writable.write(contents);
      await writable.close();
    }   

    let fileHandle;
    let saveTo;

    butOpenFile.addEventListener('click', async () => {
      [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      const contents = await file.text();
      textArea.value = contents;
    });

    butSaveFile.addEventListener('click', async () => {
    if (typeof saveTo == 'undefined') {
        saveTo = await window.showSaveFilePicker();
    } 
     writeFile(saveTo, textArea.value);
    });     