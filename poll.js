
function yigitClick() {
    var forYigit = document.getElementById("yigit");
    var forMurat = document.getElementById("murat");

    if(forMurat.classList.contains("channelChecked")) {
        forMurat.classList.remove("channelChecked");
        forYigit.classList.add("channelChecked");
    }
}

function muratClick() {
    var forYigit = document.getElementById("yigit");
    var forMurat = document.getElementById("murat");

    if(forYigit.classList.contains("channelChecked")){
        forYigit.classList.remove("channelChecked");
        forMurat.classList.add("channelChecked");
    }
}

function optionOtherSelect() {
    var optionOne = document.getElementById("o1");
    var optionTwo = document.getElementById("o2");
    var optionThree = document.getElementById("o3");
    var optionOther = document.getElementById("option-other");
    var textArea = document.getElementById("other-text");

    if (optionOther.classList.contains("subjectChecked")) {
    } else {
        optionOther.classList.add("subjectChecked");
        optionOne.classList.remove("subjectChecked");
        optionTwo.classList.remove("subjectChecked");
        optionThree.classList.remove("subjectChecked");
        textArea.disabled = false;
    }
}
function optionOneSelect() {
    var optionOne = document.getElementById("o1");
    var optionTwo = document.getElementById("o2");
    var optionThree = document.getElementById("o3");
    var optionOther = document.getElementById("option-other");
    var textArea = document.getElementById("other-text");

    if (optionOne.classList.contains("subjectChecked")) {
    } else {
        optionOne.classList.add("subjectChecked");
        optionOther.classList.remove("subjectChecked");
        optionTwo.classList.remove("subjectChecked");
        optionThree.classList.remove("subjectChecked");
        textArea.disabled = true;
    }
}
function optionTwoSelect() {
    var optionOne = document.getElementById("o1");
    var optionTwo = document.getElementById("o2");
    var optionThree = document.getElementById("o3");
    var optionOther = document.getElementById("option-other");
    var textArea = document.getElementById("other-text");

    if (optionTwo.classList.contains("subjectChecked")) {
    } else {
        optionTwo.classList.add("subjectChecked");
        optionOne.classList.remove("subjectChecked");
        optionOther.classList.remove("subjectChecked");
        optionThree.classList.remove("subjectChecked");
        textArea.disabled = true;
    }
}
function optionThreeSelect() {
    var optionOne = document.getElementById("o1");
    var optionTwo = document.getElementById("o2");
    var optionThree = document.getElementById("o3");
    var optionOther = document.getElementById("option-other");
    var textArea = document.getElementById("other-text");

    if (optionThree.classList.contains("subjectChecked")) {
    } else {
        optionThree.classList.add("subjectChecked");
        optionOne.classList.remove("subjectChecked");
        optionTwo.classList.remove("subjectChecked");
        optionOther.classList.remove("subjectChecked");
        textArea.disabled = true;
    }
}