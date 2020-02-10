using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro; //-- this is an extra line we need to use Text Mesh Pro

public class MyTimerScript : MonoBehaviour
{
    //-- this variable is going to say how long we want the timer to be
    float timerDuration = 5f; //this means 5 seconds

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        //-- this is an IF STATEMENT
        //-- IF STATEMENTS only execute some code if a certain condition is fulfilled
        //-- the condition we're asking here is: "is the time since we started the application greater than the time stored in our timerDuration variable?"
        //-- if that value is greater (i.e. if the time has been more than X seconds)
        //-- then the code in the brackets below gets executed
        //-- 
        //-- if that's not the case, the code in the bracket gets ignored
        if(Time.time > timerDuration){

            //-- here we get the component Text Mesh Pro, and then the value "text" and we set it to the value "la, la, la, la"
            GetComponent<TextMeshPro>().text = "la, la, la, la";
        }
    }
}
