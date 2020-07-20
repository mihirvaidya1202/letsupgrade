var num1="";
var num2="";
var flagOp=0;
var ch=0;
var res=0;
var length;
var float=0;

function on1()
{
    if(flagOp==0)
    {
        num1=num1+"1";
        document.getElementById("display").innerHTML=num1;
    }
    if(flagOp==1)
    {
        num2=num2+"1";
        document.getElementById("display").innerHTML=num1+num2;
    }
}
function on2()
{
    if(flagOp==0)
    {
        num1=num1+"2";
        document.getElementById("display").innerHTML=num1;
    }
    if(flagOp==1)
    {
        num2=num2+"2";
        document.getElementById("display").innerHTML=num1+num2;
    }
}
function on3()
{
    if(flagOp==0)
    {
        num1=num1+"3";
        document.getElementById("display").innerHTML=num1;
    }
    if(flagOp==1)
    {
        num2=num2+"3";
        document.getElementById("display").innerHTML=num1+num2;
    }
}
function on4()
{
    if(flagOp==0)
    {
        num1=num1+"4";
        document.getElementById("display").innerHTML=num1;
    }
    if(flagOp==1)
    {
        num2=num2+"4";
        document.getElementById("display").innerHTML=num1+num2;
    }
}function on5()
{
    if(flagOp==0)
    {
        num1=num1+"5";
        document.getElementById("display").innerHTML=num1;
    }
    if(flagOp==1)
    {
        num2=num2+"5";
        document.getElementById("display").innerHTML=num1+num2;
    }
}function on6()
{
    if(flagOp==0)
    {
        num1=num1+"6";
        document.getElementById("display").innerHTML=num1;
    }
    if(flagOp==1)
    {
        num2=num2+"6";
        document.getElementById("display").innerHTML=num1+num2;
    }
}
function on7()
{
    if(flagOp==0)
    {
        num1=num1+"7";
        document.getElementById("display").innerHTML=num1;
    }
    if(flagOp==1)
    {
        num2=num2+"7";
        document.getElementById("display").innerHTML=num1+num2;
    }
}
function on8()
{
    if(flagOp==0)
    {
        num1=num1+"8";
        document.getElementById("display").innerHTML=num1;
    }
    if(flagOp==1)
    {
        num2=num2+"8";
        document.getElementById("display").innerHTML=num1+num2;
    }
}
function on9()
{
    if(flagOp==0)
    {
        num1=num1+"9";
        document.getElementById("display").innerHTML=num1;
    }
    if(flagOp==1)
    {
        num2=num2+"9";
        document.getElementById("display").innerHTML=num1+num2;
    }
}
function on0()
{
    if(flagOp==0)
    {
        num1=num1+"0";
        document.getElementById("display").innerHTML=num1;
    }
    if(flagOp==1)
    {
        num2=num2+"0";
        document.getElementById("display").innerHTML=num1+num2;
    }
}
function onPlus()
{
    if(flagOp==0 && num1!="")
    {
        num1=`${num1}+`;
        document.getElementById("display").innerHTML=num1;
        ch=1;
        flagOp=1;
        float=0;
    }
}

function onSub()
{
    if(flagOp==0 && num1!="")
    {
        num1=`${num1}-`;
        document.getElementById("display").innerHTML=num1;
        ch=2;
        flagOp=1;
        float=0;
    }
}

function onMul()
{
    if(flagOp==0 && num1!="")
    {
        num1=`${num1}*`;
        document.getElementById("display").innerHTML=num1;
        ch=3;
        flagOp=1;
        float=0;
    }
}

function onDiv()
{
    if(flagOp==0 && num1!="")
    {
        num1=`${num1}/`;
        document.getElementById("display").innerHTML=num1;
        ch=4;
        flagOp=1;
        float=0;
    }
}

function onMod()
{
    if(flagOp==0 && num1!="")
    {
        num1=`${num1}%`;
        document.getElementById("display").innerHTML=num1;
        ch=5;
        flagOp=1;
        float=0;
    }
}

function onSqrRoot()
{
    if(flagOp==0 && num1!="")
    {
        num1=Math.sqrt(num1);
        document.getElementById("display").innerHTML=num1;
        if(isFloat(num1))
        {
            float=1;
        }
        num1=String(num1);
    }
}

function onSqr()
{
    if(flagOp==0 && num1!="")
    {
        num1=num1*num1;
        document.getElementById("display").innerHTML=num1;
        if(isFloat(num1))
        {
            float=1;
        }
        num1=String(num1);
    }
}

function onPoint()
{
    if(float==0 && num1!="")
    {
        if(flagOp==0)
        {
            num1=num1+".";
            document.getElementById("display").innerHTML=num1;
            float=1;
        }
        if(flagOp==1)
        {
            num2=num2+".";
            document.getElementById("display").innerHTML=num1+num2;
            float=1;
        }
    }
}

function onClear()
{
    num1="";
    num2="";
    res=0;
    flagOp=0;
    document.getElementById("display").innerHTML="";
    float=0;
}

function onDel()
{
    if(flagOp==1 && num2=="")
    {
        var lpt=num1.length;
        var chpt=num1[lpt-1];
        console.log(chpt);
        if(chpt==".")
        {
            float=0;
        }
        length=num1.length;
        num1=num1.substring(0,length-1);
        document.getElementById("display").innerHTML=num1;
        flagOp=0;
        console.log(1);
        console.log(num1);
        console.log(num2);
    }
    else if(flagOp!=1 && num2=="")
    {
        var lpt=num1.length;
        var chpt=num1[lpt-1];
        console.log(chpt);
        if(chpt==".")
        {
            float=0;
        }
        console.log(2);
        length=num1.length;
        num1=num1.substring(0,length-1);
        document.getElementById("display").innerHTML=num1;
        console.log(num1);
        console.log(num2);
    }
    else if(flagOp==1 && num2!="")
    {
        var lpt=num2.length;
        var chpt=num2[lpt-1];
        console.log(chpt);
        if(chpt==".")
        {
            float=0;
        }
        length=num2.length;
        num2=num2.substring(0,length-1);
        document.getElementById("display").innerHTML=num1+num2;
        console.log(3);
        console.log(num1);
        console.log(num2);
    }
}

function onEqual()
{
    if(flagOp!=0)
    {
        length=num1.length;
        num1=num1.substring(0,length-1);
        console.log(num1);
        console.log(num2);
        switch(ch)
        {
            case 1:
                res=Number(num1)+Number(num2);
                document.getElementById("display").innerHTML=res;
                if(isFloat(res))
                {
                    float=1;
                }
                num1=String(res);
                num2="";
                res=0;
                flagOp=0;
                break;
            case 2:
                res=Number(num1)-Number(num2);
                document.getElementById("display").innerHTML=res;
                if(isFloat(res))
                {
                    float=1;
                }
                num1=String(res);
                num2="";
                res=0;
                flagOp=0;
                break;
            case 3:
                res=Number(num1)*Number(num2);
                document.getElementById("display").innerHTML=res;
                if(isFloat(res))
                {
                    float=1;
                }
                num1=String(res);
                num2="";
                res=0;
                flagOp=0;
                break;
            case 4:
                res=Number(num1)/Number(num2);
                document.getElementById("display").innerHTML=res;
                if(isFloat(res))
                {
                    float=1;
                }
                num1=String(res);
                num2="";
                res=0;
                flagOp=0;
                break;
            case 5:
                res=Number(num1)%Number(num2);
                document.getElementById("display").innerHTML=res;
                if(isFloat(res))
                {
                    float=1;
                }
                num1=String(res);
                num2="";
                res=0;
                flagOp=0;
                break;
        }
    }  
}

function isFloat(n)
{

    if(Number(n)===n && n%1!==0)
    {
        return true;
    }
    else{
        return false;
    }
}