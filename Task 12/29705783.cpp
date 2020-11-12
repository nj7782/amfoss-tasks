#include <bits/stdc++.h> // Include every standard library 
using namespace std; 
  
typedef long long ll; 
typedef pair<int, int> pii; 
typedef pair<ll, ll> pll; 
typedef pair<string, string> pss; 
typedef vector<int> vi; 
typedef vector<vi> vvi; 
typedef vector<pii> vii; 
typedef vector<ll> vl; 
typedef vector<vl> vvl; 
  
double EPS = 1e-9; 
int INF = 1000000005; 
long long INFF = 1000000000000000005LL; 
double PI = acos(-1); 
int dirx[8] = { -1, 0, 0, 1, -1, -1, 1, 1 }; 
int diry[8] = { 0, 1, -1, 0, -1, 1, -1, 1 }; 
  
#ifdef TESTING 
#define DEBUG fprintf(stderr, "====TESTING====\n") 
#define VALUE(x) cerr << "The value of " << #x << " is " << x << endl 
#define debug(...) fprintf(stderr, __VA_ARGS__) 
#else 
#define DEBUG 
#define VALUE(x) 
#define debug(...) 
#endif 

#define endl "\n"  
#define FOR(a, b, c) for (int(a) = (b); (a) < (c); ++(a)) 
#define FORN(a, b, c) for (int(a) = (b); (a) <= (c); ++(a)) 
#define FORD(a, b, c) for (int(a) = (b); (a) >= (c); --(a)) 
#define FORSQ(a, b, c) for (int(a) = (b); (a) * (a) <= (c); ++(a)) 
#define FORC(a, b, c) for (char(a) = (b); (a) <= (c); ++(a)) 
#define FOREACH(a, b) for (auto&(a) : (b)) 
#define rep(i, n) FOR(i, 0, n) 
#define repn(i, n) FORN(i, 1, n) 
#define MAX(a, b) a = max(a, b) 
#define MIN(a, b) a = min(a, b) 
#define SQR(x) ((ll)(x) * (x)) 
#define RESET(a, b) memset(a, b, sizeof(a)) 
#define fi first 
#define se second 
#define mp make_pair 
#define pb push_back 
#define ALL(v) v.begin(), v.end() 
#define ALLA(arr, sz) arr, arr + sz 
#define SIZE(v) (int)v.size() 
#define SORT(v) sort(ALL(v)) 
#define REVERSE(v) reverse(ALL(v)) 
#define SORTA(arr, sz) sort(ALLA(arr, sz)) 
#define REVERSEA(arr, sz) reverse(ALLA(arr, sz)) 
#define PERMUTE next_permutation 
#define tc(t) while (t--)


int main(){
    double i,ans,b,c,temp,temp_2,k;
    int t;
    cin>>t;
    tc(t){ans=INFF;
        cin>>b>>c;
        for(i=0.4;i<=1.5;i += 0.01){
            temp=tan(i);
            temp_2=(i*i + b*i+c)/(2*i+b);
            if(temp_2<temp){
                temp_2=i;break;
            }
        }        



        for(i=(temp_2-0.01);i<=temp_2;i += 0.0001){
            temp = (i*i + b*i+c)/sin(i);
            if(temp<ans){
                ans=temp;k=i;
            }
        }
        cout<<fixed<<setprecision(10)<<ans<<endl;
    }
    return 0;
}