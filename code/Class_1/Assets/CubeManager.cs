using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CubeManager : MonoBehaviour {
    
    //declaring a variable
    int myNumber = 4;

    //public is a keyword that lets our variable show up in unity!
    //vector3 is the type of our variable
    //theCubePosition is the arbitrary name we gave it
    public Vector3 theCubePosition;

	// Use this for initialization
	void Start () {

        //HOW TO MANIPULATE OBJECTS
        //1. Get the component
        //2. Get the field (here, the color inside the material)
        //3. Change that value
        GetComponent<MeshRenderer>().material.color = Color.red;


        GetComponent<Transform>().position = theCubePosition;
	}
	
	// Update is called once per frame
	void Update () {

	}
}
