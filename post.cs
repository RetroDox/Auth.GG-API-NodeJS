static async void sendingReq()
{
          string key = ""; // License Key here
          var content = new StringContent((key));
          HttpClient client = new HttpClient();
          var response = await client.PostAsync("http://localhost:3000/hwidrest", content);
          var responseString = await response.Content.ReadAsStringAsync();
          Console.WriteLine(responseString);
}
