using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SphereScript : MonoBehaviour
{

    //-- declared (give them a name)
    //-- given a type (number, words, logic, colors, transform)
    //-- given a value

    // float: floating point number 0.1
    // int is an integer, whole number 0 - 2 - 3 -435
    float yPosition = 0;

    // Start is called before the first frame update
    void Start()
    {
        // PROGRAMMING IS THREE THINGS
        // ONE - COMMENTS
        // TWO - VARIABLES or DATA
        // THREE - FUNCTIONS or ACTIONS or RECIPES

        // to move the sphere, we need to get the component TRANSFORM
        // setting the initial position
        GetComponent<Transform>().position = new Vector3(0, 0, 0);

        // DEBUG LOG
        // START VS. UPDATE
        // VARIABLES USAGE
    }

    // Update is called once per frame
    void Update()
    {
      // move the sphere up
      // move the sphere y axis, positive
      // increase the value on the y axis

      // this is where we make the variable change
      yPosition = yPosition + 0.1f;

      //and then the change happens here
      GetComponent<Transform>().position = new Vector3(0, yPosition, 0);
    }
}
