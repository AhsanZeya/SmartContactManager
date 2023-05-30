console.log("this is script file")

const toggleSidebar=()=>{

    if($(".sidebar").is(":visible")){
        //true
        //band karna hai
        $(".sidebar").css("display","none");
        $(".content").css("margin-left","0%");
        console.log("Band Krna hai")

    }

    else{
        //false
        //show krna hai
        $(".sidebar").css("display","block");
        $(".content").css("margin-left","20%");
        console.log("show krna hai")
    }
};