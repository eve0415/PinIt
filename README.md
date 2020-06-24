# PinIt
 This bot will make any member to pin the messages without having "MANAGE_MESSAGES" permission.  
 This might be handy if you don't want to give users the permission to remove messages but only pinning.  
 PinIt doesn't have any commands nor it will speak.  
 
 このbotは、メンバーに「MANAGE_MESSAGES」の権限を与えずに、メッセージをピン留めすることができるようにします。  
 メッセージを削除する権限をユーザーに与えたくないけど、メッセージのピン留めさせたい場合はこのbotを招待するだけで、実現できます。  
 PinItにはコマンドもありませんし、しゃべることもしません。
 
## How To Use
 To pin a message, react with 📌`:pushpin:`  
 To unpin, react with ❌`:x:`  
 
 ピン留めする場合は、メッセージに 📌`:pushpin:` をリアクションしてください。  
 ピン留めを外す場合は、メッセージに ❌`:x:` をリアクションしてください。
 
## But I don't want everyone to pin a message!
 Yes, I understand.  
 If you want to limit to people who has a certain role, simply give the same role to the bot.  
 
 ex) Give `pin` role to user and PinIt  
 Now, the only one who has a `pin` role can pin or unpin a message via PinIt.  
 
 特定の役職を持つ人に限定したい場合は、ボットに同じ役職を与えてください。 
 
 例）ユーザーとPinItに`pin`の役職を与えることによって、`pin`の役職を持つ人がPinItを介してピン留めまたはピン留めを外すことができます。
 
### On my server, I give `Bot` role to all bots! Do I need to give `Bot` role to user?
 The answer is NO.  
 I made a blacklist to ignore roles that have only the word `robot` or `bot`.
 So you can give PinIt a `bot` role and other roles to limit people to use this bot.
 
 自分のサーバーだと、botには`bot`の役職を与えるけど、この場合はユーザーにも`bot`の役職を与える必要はある？　　
 
 必要ありません。  
 `robot`または`bot`という単語のみを含む役職を無視するようにブラックリストを作成しました。 　
  したがって、PinItに`bot`の役職と他の役職を与えて、このボットの使用を制限することができます。

## Invite
 [To invite click here. 自分のサーバーに招待したい場合は、ここをクリックしてください。](https://discord.com/api/oauth2/authorize?client_id=725287176748924968&permissions=73792&scope=bot)

## LICENSE
```txt
MIT License

Copyright (c) 2020 eve0415

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
