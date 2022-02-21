using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UIManager : MonoBehaviour
{
    public GameObject theSphere;
    public GameObject[] theSprites;
    int spriteCounter = 0;
    // Start is called before the first frame update
    void Start()
    {
        print(theSprites[spriteCounter].name);
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void CycleThroughImages()
    {
        // hide all the non-desired images
        //-- loops
        foreach (GameObject sprite in theSprites)
        {
            //-- do something to each sprite in "theSprites" collection
            sprite.SetActive(false);
        }

        //-- activate one of the objects in the array/list
        theSprites[spriteCounter].SetActive(true);
        //-- increase the counter
        spriteCounter++;

        if(spriteCounter > 2){
            spriteCounter = 0;
        }
    }

    public void ToggleSphere()
    {
        if(theSphere.activeSelf == true){
            theSphere.SetActive(false);
        }else{
            theSphere.SetActive(true);
        }
    }
}
