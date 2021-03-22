#define TRIGPIN 5
#define ECHOPIN 6

void setup()
{
  pinMode(12, OUTPUT);
  Serial.begin(9600);
  pinMode(TRIGPIN, OUTPUT);
  pinMode(ECHOPIN, INPUT);
  pinMode(11,OUTPUT);
  pinMode(10,OUTPUT);
}

void loop()
{
  int duration, distance;
  digitalWrite(TRIGPIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIGPIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIGPIN, LOW);
  duration = pulseIn(ECHOPIN, HIGH);
  distance = (duration * 0.034)/2;
  Serial.println(distance);
  if(distance>100){
   digitalWrite(11, HIGH);
  digitalWrite(12,HIGH);
  digitalWrite(10,LOW);
  }
  else{digitalWrite(12,LOW);
      digitalWrite(10,HIGH);
      digitalWrite(11,LOW);}
  
}
