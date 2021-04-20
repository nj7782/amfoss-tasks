extern crate reqwest;
extern crate scraper;

use scraper::{Selector, Html};
use csv::Writer;
use std::fs;
use std::fs::File;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

    let resp = reqwest::get("https://www.worldometers.info/coronavirus/#countries").await?;
    assert!(resp.status().is_success());


    let body = resp.text().await?;

    let fragment = Html::parse_document(&body);

    let countries = Selector::parse("#main_table_countries_today tbody:nth-child(2) tr:not([style*=\"display: none\"]):not(.total_row_world)").unwrap();
    
    let mut count = 1;



    let mut wtr = Writer::from_path("data.csv")?;

    wtr.write_record(&["#", "Country", "Total Cases", "Total Deaths", "Total Recovered"])?;


    for country in fragment.select(&countries) {

        let mut country_txt = country.text().collect::<Vec<_>>();

        country_txt.retain(|x| *x != "\n" && !x.starts_with("+"));

        wtr.write_record(&[country_txt[0], country_txt[1], country_txt[2], country_txt[3], country_txt[4]])?;


        if cnt >= 10 { break; }
        else {cnt += 1;}
    }


    wtr.flush()?;
    Ok(())
}