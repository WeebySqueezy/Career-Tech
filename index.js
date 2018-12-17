const express = require('express');
const app = express();
const port = 3000;
var course = "undefined";

    var tbl0 = [
        {
            name:"consumer of fortnite",
            applicationTxt:"Lets go consume fortnite"
        }
    ]; var tbl1= [
        {
            name:"consumer of fine things",
            applicationTxt:"lets go consume fine things"
        }
    ]; var tbl2= [
        {
            name:"consumer of metallic objects",
            applicationTxt:"lets go consume metallic objects"
        }
    ]; var tbl3= [
        {
            name:"consumer of apple iMacs",
            applicationTxt:"Lets go consume apple iMacs"
        }
    ]; var tbl4= [
        {
            name:"consumer of varius prescribed drugs",
            applicationTxt:"Lets go consume varius prescribed drugs"
        }
    ]; var tbl5= [
        {
            name:"consumer of varius different kinds of makeup and hair products",
            applicationTxt:"Lets go consume varius different kinds of makeup and hair products"
        }
    ]; var tbl6= [
        {
            name:"consumer of varius mobile games",
            applicationTxt:"lets go consume varius mobile games"
        }
    ]; var tbl7= [
        {
            name:"consumer of varius .obj files",
            applicationTxt:"Lets go consume varius .obj files"
        }
    ]; var tbl8= [
        {
            name:"consumer of nuclear weaponry",
            applicationTxt:"Lets go nuke Aram"
        }
    ];

app.use(express.static('public'));
app.use(express.json());

app.post('/received',(req,res) => {
    var bd = req.body.courses;
    res.send(bd);
    
    if(bd == 0) {
        res.send(tbl0); 
    }
    else if (bd == 1) {
       res.send(tbl1);
    }
    else if (bd == 2) {
       res.send(tbl2); 
    }
    else if (bd == 3) {
       res.send(tbl3); 
    }
    else if (bd == 4) {
       res.send(tbl4); 
    }
    else if (bd == 5) {
       res.send(tbl5); 
    }
    else if (bd == 6) {
       res.send(tbl6); 
    }
    else if (bd == 7) {
       res.send(tbl7); 
    }
    else if (bd == 8) {
       res.send(tbl8); 
    };
     
    
    console.log(`Accessed: ${req.body.courses}`);
    console.log(`From IP: ${req.ip}`);
    
})
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})