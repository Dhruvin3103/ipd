from django.core.mail import send_mail
from django.utils.html import strip_tags
from datetime import datetime
from decouple import config

def alert_mail(username, vehicle, location):
    subject = "Alert regarding your vehicle"
    from_email = config("EMAIL_HOST_USER")
    recipient_list = ['scarlettwitch031@gmail.com']
    html_message = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Alert Message </title>
    </head>
    <body>
        <p>Hello {username},</p>
        <p>Your Vehicle {vehicle} has has been moved from its location </p>
        <p>It is out of the radius and sense it </p>
        <p>Last seen : {datetime.now().strftime('%H:%M:%S,%Y-%m-%d')} at {location}</p>
    </body>
    </html>
    """
    send_mail(
        subject,
        strip_tags(
            html_message
        ),  # Use strip_tags to provide a plain text version as well
        from_email,
        recipient_list,
        html_message=html_message,
    )

alert_mail('test_user','test_vehicle',[0,0])