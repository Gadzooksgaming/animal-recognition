function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7D_YBrJPr/',modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else{
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='I can hear-'+result[0].label;
        document.getElementById("reuslt_confidence").innerHTML='Accuracy'+(result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.colour = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.colour="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1 = document.getElementById("img1");

        if(results[0].label == "Background Noise"){
            img1.src="1download.png";
  }

        else if(results[0].label == "bark"){
            img1.src= "dog.gif";}
        else if(results[0].label == "meow"){
            img1.src= "cat.gif";}
        else if(results[0].label == "duck"){
            img1.src= "duck.gif";}
        else if(results[0].label == "others"){
            img1.src= "aliens-01.png";}
        else if(results[0].label == "horse"){
            img1.src= "0010e299dfd3d4a79511b7c8c1f088ff.gif";}
            
            
        }
      
    



    }
