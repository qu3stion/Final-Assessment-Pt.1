function wordCount(str) {

    if (str.length === 0) {
        return {};
      } 
      let output = {};
      let strArr = str.split(" ")

      for (var i=0; i < strArr.length; i++) {
        let word = strArr[i];
        if (output[word] === undefined) {
          output[word] = 1;
        } else {
          output[word] += 1;
        }
        
      }
      return output;
    }

    console.log(wordCount('A lot of funny words'));
    console.log(wordCount('Saw a saw cut a tree'));
    console.log(wordCount('With great power comes great responsibility'));

