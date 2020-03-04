using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RaycastManager : MonoBehaviour
{
    // Start is called before the first frame update
    int stage = 0;
    public GameObject firstChair;
    public GameObject secondChair;
    public GameObject thirdChair;
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {


        RaycastHit hit; //-- declaring a variable called hit of type RaycastHit
        //-- stores all the information about the thing we just hit

        //-- left click down
        if(Input.GetMouseButtonDown(0)){


        //-- draw a ray between the camera's perspective and the mouse position
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);


        //-- we're actually shooting the ray
        if (Physics.Raycast(ray, out hit, 100)){

            //-- we found a hit
            //-- the hit has a transform
            //-- the transform has a gameObject
            //-- the gameObject has a name
            if(hit.transform.gameObject.name == "Table"){

                //-- same as welcome messages
                //-- counter that increases
                if(stage == 0){
                    Instantiate(firstChair);
                    stage++;
                }else if(stage == 1){
                    Instantiate(secondChair);
                    stage++;
                }else if(stage == 2){
                    Instantiate(thirdChair);
                    stage++;
                }else{

                    GameObject[] chairs = GameObject.FindGameObjectsWithTag("Chair");
                    for(int i = 0; i < chairs.Length; i++){
                        Destroy(chairs[i]); //--here they are actually destroyed
                    }

                }

                
            }
        }
            
        }
    }
}
