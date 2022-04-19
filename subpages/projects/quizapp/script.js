function submitbutton() {
    var correct = 0;
    var q1 = document.submitform.q1.value;
    var q2 = document.submitform.q2.value;
    var q3 = document.submitform.q3.value;
    var q4 = document.submitform.q4.value;
    var q5 = document.submitform.q5.value;
    if (q1 == "true") {correct++};
    if (q2 == "true") {correct++};
    if (q3 == "true") {correct++};
    if (q4 == "true") {correct++};
    if (q5 == "true") {correct++};
    var percent = (correct / 5) * 100;
    alert("Your current score is: " + correct + "/5. Percent: " + percent + "%.")
}