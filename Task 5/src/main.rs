extern crate reqwest;
extern crate scraper;

use std::error::Error;
use csv;
use scraper::{Html, Selector};
use serde::Serialize;

#[derive(Serialize)]
struct Record<'a> {
    country: &'a str,
}

fn main(){

    scraping("https://www.worldometers.info/coronavirus/#countries");
}

fn scraping(url:&str)->Result<(), Box<dyn Error>>{
    let mut writer = csv::Writer::from_path("data.csv")?;


    let mut countries = Vec::new();

    let mut req = reqwest::get(url).unwrap();
    assert!(req.status().is_success());
    let ht = Html::parse_document(&req.text().unwrap());
    let countr = Selector::parse("a.mt_a").unwrap();
    let mut j=0;
    for p in ht.select(&countr){
        let a = p.text().collect::<Vec<_>>();

        countries.push(a[0]);
        if(j<10){
            writer.serialize(Record{country: a[0]});
        }


        j+=1;

    }
    let a2 = Selector::parse("tr").unwrap();


    let mut i=0;
    for q in ht.select(&a2){
        let data = q.text().collect::<Vec<_>>();

        if(i>8 && i<19){

            writer.serialize(&data);
        }

        i+=1;
    }



    Ok(())

}
