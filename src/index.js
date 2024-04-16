document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);

    function buildMadLib() {
      let pluralNoun = document.getElementById("plural-noun").value;
      let adjective = document.getElementById("adjective").value;
      let verb = document.getElementById("verb").value;
      let noun = document.getElementById("noun").value;
      let conjunction = document.getElementById("conjunction").value;

      // Check if all input fields are filled
      if (pluralNoun && adjective && verb && noun && conjunction) {
        let processes = [
        '"There are too many ' + pluralNoun + ' on this ' + adjective + ' airplane!", I screamed. "Somebody has to ' + verb + ' ' + conjunction + ' the ' + noun + ' to solve this problem."',
      '"The ' + adjective + ' ' + noun + ' and the ' + pluralNoun + ' lived happily ever after, always finding time to ' + verb + ' ' + conjunction + '."',
      '"The ' + pluralNoun + ' gathered around the ' + adjective + ' ' + noun + '. They decided to ' + verb + ' ' + conjunction + ' to create something amazing."',
        ];

        let randomProcess = processes[Math.floor(Math.random() * processes.length)];
        document.getElementById("result").innerHTML = randomProcess;

        // Clear input fields
        document.getElementById("plural-noun").value = "";
        document.getElementById("adjective").value = "";
        document.getElementById("verb").value = "";
        document.getElementById("noun").value = "";
        document.getElementById("conjunction").value = "";
      } else {
        // Inform the user that all fields must be filled
        document.getElementById("result").innerHTML = "Please fill in all the input fields.";
      }
    }
