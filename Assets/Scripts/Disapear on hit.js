#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(Hit : Collider)
    {
        if(Hit.name == "Player") // you can compare tags instead: if (Hit.tag = "Player")
        {
            GetComponent.<Renderer>().enabled = false; // renderer alone is the trigger renderer
        }
    }