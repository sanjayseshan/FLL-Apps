//Init vars
n = 0;

score = ""
datetime = ""

if (window.localStorage.DRRBS1scorer == undefined) {
  window.localStorage.DRRBS1scorer = ''
}

// Function to get status check of all missions and store in var store (also returned)
function getRBSave() {
  count = 0
  count1 = 0
  data = []
  while (count < document.getElementsByClassName("rbitem").length) {
    if (document.getElementsByClassName("rbitem")[count].tagName == "INPUT") {
        data = data.concat(document.getElementsByClassName("rbitem")[count].id + "|||" + document.getElementsByClassName("rbitem")[count].checked)    
    } else if (document.getElementsByClassName("rbitem")[count].tagName == "TEXTAREA") {
        data = data.concat(document.getElementsByClassName("rbitem")[count].id + "|||" + document.getElementsByClassName("rbitem")[count].value)    
    }
    count = count + 1
  }
  return data
}

//load a getvar() var store save
function loadRBsave(save) {
  newsave = String(save).split('///')
  count = 0
  while (count < newsave.length) {
    save1 = newsave[count].split('|||')
    console.log(save1)
    if (save1[1]=="true") {
        document.getElementById(save1[0]).click()
        document.getElementById(save1[0]).checked  = true
        $("input[type='checkbox']:first").attr("checked",true).checkboxradio("refresh");
    } else if (save1[1]=="false") {} else {
        document.getElementById(save1[0]).value = save1[1]
    }
    count = count + 1

  }
}

// Load a localStorage getvar() var store save by id
function loaderRB(save) {
  alert(loadedText);
  data = window.localStorage.DRRBSscorer.split('&&&')[save];
  loadRBsave(String(data));
}


// save getvar() and saveDateTimeScore to localStorage
function saverRB() {
  // Save all missions
  store = getRBSave();
  window.localStorage.DRRBSscorer = window.localStorage.DRRBSscorer + '&&&' + store.join("///")
  // Save time stamp and score
  alert("saved");
}
