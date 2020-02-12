using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RevealImage : MonoBehaviour
{
    public GameObject myImage;
    // Start is called before the first frame update
    void Start()
    {
        //-- at the beginning, disable the component in the image
        //-- which makes it appear on the screen
        myImage.GetComponent<Renderer>().enabled = false;
    }

    // Update is called once per frame
    void Update()
    {

        if(Input.GetMouseButtonDown(0)){

            //-- hey, check if the renderer is enabled (aka if the image is visible)
            if(myImage.GetComponent<Renderer>().enabled == true){

                //-- in which case, make it invisible
                myImage.GetComponent<Renderer>().enabled = false;
                Debug.Log("hey i'm making it invisible");

            //-- otherwise
            }else{
                
                //-- make it visible
                myImage.GetComponent<Renderer>().enabled = true;
                Debug.Log("hey i'm making it visible");

            }

        }
    }
}
