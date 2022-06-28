
var a1,a2,a3,a4,a5;
function msg_send()
{
	$(document).ready(function(e) {
        a1=$("#name").val();
		a2=$("#email").val();
		a3=$("#message").val();
		
		if(a1=="")
		{
			alert("Please Enter Name");
		}
		else
		{
			if(a2=="")
			{
				alert("Please Enter Email ID");
			}
			else
			{
				if(a3=="")
				{
					alert("Please Enter Message");
				}
				else
				{
					$("#name").val("");
					$("#email").val("");
					$("#message").val("");
					alert("Thanks For query. Our team will contact you soon.");
					$.ajax({
						type:"POST",
						data:{a1:a1,a2:a2,a3:a3},
						url:"data/index.php",
						success: function(html){
							$("#sp_del").prepend(html);
						}
						})
				}
			}
		}
		
    });
}

















