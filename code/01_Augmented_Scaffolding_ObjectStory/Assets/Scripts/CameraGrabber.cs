using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class CameraGrabber : MonoBehaviour {

    public RawImage cameraSurface;
    WebCamTexture mCam;

	// Use this for initialization
	void Start () {
        mCam = new WebCamTexture(640, 480);
        cameraSurface.material.mainTexture = mCam;
        cameraSurface.texture = mCam;
        mCam.Play();
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
