
    function ValidateEmail(inputText)
    {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
    alert("감사합니다!");
    document.form1.text1.focus();
    return true;
    }
    else
    {
    alert("유요하지 않은 이메일입니다!");
    document.form1.text1.focus();
    return false;
    }
    }
    function ValidateSns(inputText)
    {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
    alert("감사합니다!");
    document.form2.text2.focus();
    return true;
    }
    else
    {
    alert("유요하지 않은 계정입니다!");
    document.form2.text2.focus();
    return false;
    }
    }
