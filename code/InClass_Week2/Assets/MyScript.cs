using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MyScript : MonoBehaviour
{

    public int theNumber = 7;
    public GameObject theLight;

    //- have a variable for red, and keep incrementing
    float redValue = 0f;
    float theIntensity = 0f;
    // Start is called before the first frame update
    void Start()
    {
        
        //-- we need to get the object
        //-- done!
        //get the component

        // RGB -> RED GREEN BLUE
        theLight.GetComponent<Light>().intensity = theIntensity;

        //change the value
    }

    // Update is called once per frame
    void Update()
    {
        theIntensity = theIntensity + 0.01f;

        theLight.GetComponent<Light>().intensity = theIntensity;
    }
}
