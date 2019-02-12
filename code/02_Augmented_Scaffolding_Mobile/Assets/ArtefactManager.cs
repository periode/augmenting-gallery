using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ArtefactManager : MonoBehaviour {

    public GameObject artefact;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}

    public void ReceivedTouch(Vector3 position, Quaternion rotation){
        GameObject.Instantiate(artefact, position, rotation);
    }
}
