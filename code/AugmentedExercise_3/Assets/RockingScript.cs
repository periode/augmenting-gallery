using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RockingScript : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {

        //-- this gets a number that changes smoothly between -75 and -90
        float rocking = (Mathf.Sin(Time.time) + 1)*7.5f - 90f;

        //-- this is where we assign it to the angle of the chair
        transform.eulerAngles = new Vector3(rocking, 39f, 0f);
    }
}
