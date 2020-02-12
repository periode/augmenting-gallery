using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;

public class InteractionManager : MonoBehaviour
{

    //-- these two variables are to make sure this script is
    //-- on the AR Session Origin
    ARSessionOrigin origin;
    ARRaycastManager raycastManager;
    public Transform objectToAppear;
    Quaternion theRotation;
    static List<ARRaycastHit> s_Hits = new List<ARRaycastHit>();
    // Start is called before the first frame update
    void Start()
    {
        origin = GetComponent<ARSessionOrigin>();
        raycastManager = GetComponent<ARRaycastManager>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.touchCount == 0 || objectToAppear == null)
            return;
        
        Vector3 touch = Input.GetTouch(0).position;

        if(raycastManager.Raycast(touch, s_Hits, TrackableType.PlaneWithinPolygon)){
            var hitPose = s_Hits[0].pose;

            origin.MakeContentAppearAt(objectToAppear, hitPose.position, theRotation);
        }
    }
}
