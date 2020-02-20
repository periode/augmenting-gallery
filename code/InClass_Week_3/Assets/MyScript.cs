using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;   

//--namespaces
public class MyScript : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        //-- do we have more than one touch recorded?
        if(Input.touchCount > 0){

            //-- if yes, give me the first one
            Debug.Log(Input.GetTouch(0).position);
        }

        if(Input.GetMouseButtonDown(0)){

            //-- first the mouse position
            Vector3 origin = Input.mousePosition;

            //-- information where we store the hit
            RaycastHit hitInfo;
            
            //-- do some math to relate the math position to the camera
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);

            if (Physics.Raycast(ray, out hitInfo)){
                Debug.Log(hitInfo.transform.gameObject);
            }
        }
        
    }

    public void ButtonWhatever(){
        GameObject.Find("Text").GetComponent<Text>().text = "whatever";
    }
}
