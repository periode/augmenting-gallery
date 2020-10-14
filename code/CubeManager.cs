using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;

public class CubeManager : MonoBehaviour
{

    //-- these two variables are to make sure this script is
    //-- on the AR Session Origin
    ARSessionOrigin origin;
    ARRaycastManager raycastManager;
    public GameObject objectToAppear;

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

        var touch = Input.GetTouch(0);
        if (touch.phase == TouchPhase.Ended)
        {
            if (Input.touchCount == 1)
            {
                if (raycastManager.Raycast(touch.position, s_Hits, TrackableType.Planes))
                {
                    var pose = s_Hits[0].pose;
                    CreateCube(pose.position);
                    return;
                }
            }

        }
    }

    private void CreateCube(Vector3 position)
    {
        Instantiate(objectToAppear, position, Quaternion.identity);
    }
}