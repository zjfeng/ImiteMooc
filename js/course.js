window.onload = function () {

    myFocus.set({
        id:"picBox",
        loadIMGTimeout:"0",
        pattern:"mF_kdui",
    });

	var course_type = document.getElementById("course_type");
    var ct_lis = course_type.getElementsByTagName('li');
    var course = document.getElementById("course");
    var course_divs = course.getElementsByTagName("div");
    for (var i = 0; i < ct_lis.length; i++) {
        ct_lis[i].index = i;
        ct_lis[i].onmouseover = function () {
            for (var j = 1; j < 5; j++) {
                course_divs[j].className = "hidden"
            }
            console.log(course_divs);
            console.log(this.index);
            course_divs[this.index + 1].className = "course_pic";
        }
    }
}

function getByClassName(parent, child) {
    var allTag = parent.getElementsByTagName('*');
    var tarClass = new Array();
    for (var i = 0; i < allTag.length; i++) {
        if (allTag[i].className == child) {
            tarClass.push(allTag[i]);
        }
    }
    return tarClass;
}