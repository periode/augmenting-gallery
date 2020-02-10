using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro; //-- this is an extra line we need to use Text Mesh Pro


public class AppManager : MonoBehaviour

{

    //-- these are the variable for our images
    public Sprite greekVilla;
    public Sprite romanVilla;
    public Sprite romanMuseum;
    public Sprite britishVilla1;
    public Sprite britishVilla2;
    public Sprite marmyte;
    public Sprite britishMuseum;


    //----- these are the variable for our texts
    string textGreekVilla = "The original version of the dog is thought to come from some northern part of greece.";
    string textRomanVilla = "This actual statue is a copy that was made on display in Rome";
    string textRomanMuseum = "The next stop was in the antique shop of someone called Bartolomeo Cavaceppi. This is the museum he worked at (because we don't have pictures of his shop, where the dog was stored)";
    string textBritishVilla1 = "The dog was then bought by Mr. Jennings, who brought it back to Britain, and displayed it at his villa.";
    string textBritishVilla2 = "Because of gambling, he had to sell it to a certain Mr. Duncombe, who put it in his own Duncombe Mansion";
    string textMarmyte = "In the 20th century, he had to open up his estate to a boarding school, and pupils are said to have shoved marmyte sandwiches into its mouth";
    string textBritishMuseum = "Finally, as all roads lead to Rome, all artworks lead to the British Museum, where it is now";
    // Start is called before the first frame update
    void Start()
    {
        //-- we set the first image and the first text
       
    }

    // Update is called once per frame
    void Update()
    {
        if(Time.time < 6f){
            GameObject.Find("Main Image").GetComponent<SpriteRenderer>().sprite = greekVilla;
            GameObject.Find("Main Text").GetComponent<TextMeshPro>().text = textGreekVilla;
        }else if(Time.time < 12f){
            GameObject.Find("Main Image").GetComponent<SpriteRenderer>().sprite = romanVilla;
            GameObject.Find("Main Text").GetComponent<TextMeshPro>().text = textRomanVilla;
        }else if(Time.time < 18f){
            GameObject.Find("Main Image").GetComponent<SpriteRenderer>().sprite = romanMuseum;
            GameObject.Find("Main Text").GetComponent<TextMeshPro>().text = textRomanMuseum;
        }else if(Time.time < 24f){
            GameObject.Find("Main Image").GetComponent<SpriteRenderer>().sprite = britishVilla1;
            GameObject.Find("Main Text").GetComponent<TextMeshPro>().text = textBritishVilla1;
        }else if(Time.time < 30f){
            GameObject.Find("Main Image").GetComponent<SpriteRenderer>().sprite = britishVilla2;
            GameObject.Find("Main Text").GetComponent<TextMeshPro>().text = textBritishVilla2;
        }else if(Time.time < 36f){
            GameObject.Find("Main Image").GetComponent<SpriteRenderer>().sprite = marmyte;
        GameObject.Find("Main Text").GetComponent<TextMeshPro>().text = textMarmyte;
        }else if(Time.time < 42f){
            GameObject.Find("Main Image").GetComponent<SpriteRenderer>().sprite = britishMuseum;
            GameObject.Find("Main Text").GetComponent<TextMeshPro>().text = textBritishMuseum;
        }
    }
}
