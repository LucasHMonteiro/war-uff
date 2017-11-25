svg = document.getElementsByTagName('svg')[0];
paths = svg.getElementsByTagName('path');
for (var index = 0; index < paths.length; index++) {
    path = paths[index];
    if (!path.classList.contains('bg')){
        path.addEventListener('mouseover', function() {
            c_name = this.classList[0];
            document.getElementById(c_name+'-info').style.display = 'block';
            console.log(c_name);
        });
        path.addEventListener('mouseout', function () {
            c_name = this.classList[0];
            document.getElementById(c_name + '-info').style.display = 'none';
            console.log(c_name);
        });
    }
}