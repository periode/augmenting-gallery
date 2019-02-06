using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class AppManager : MonoBehaviour {

    public Sprite[] images;
    public string[] texts;
    int text_index = 0;
    int image_index = 0;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
        GameObject.Find("TheText").GetComponent<Text>().text = texts[text_index];
	}

    public void RandomImage(){
        image_index = Random.Range(0, images.Length);
        GameObject.Find("TheImage").GetComponent<Image>().sprite = images[image_index];
    }

    public void NextText(){
        text_index++;

        if (text_index > texts.Length - 1)
            text_index = 0;
    }

    public void PreviousText(){
        text_index--;

        if (text_index < 0)
            text_index = texts.Length - 1;
    }
}
