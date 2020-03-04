using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class InterfaceManager : MonoBehaviour
{

    public Text welcomeText;
    public string[] welcomeMessages;
    public GameObject plasticTable;
    int welcomeMessageIndex = 0;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    //-- adds to the strings and cycles through the text
    public void NextWelcomeMessage(){
        //-- increase the counter of clicks by 1
        welcomeMessageIndex++;

        //-- checks if it is not out of range
        if(welcomeMessageIndex < welcomeMessages.Length){

            //-- sets the value of the text field to be the number of welcomeMessages
            welcomeText.text = welcomeMessages[welcomeMessageIndex];
        }else{

            //-- stops displaying the welcome messages
            GameObject.Find("WelcomeCanvas").SetActive(false);

            //-- displays the plastic table
            plasticTable.SetActive(true);
        }
            
    }
}
