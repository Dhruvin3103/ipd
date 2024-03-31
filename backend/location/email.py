from django.core.mail import send_mail
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from datetime import datetime
from decouple import config


def alert_mail(username, vehicle, location):
    subject = "Alert regarding your vehicle"
    from_email = config("EMAIL_HOST_USER")
    recipient_list = ["scarlettwitch031@gmail.com"]
    html_content = render_to_string(
        "email_template.html",
        {"username": username, "vehicle": vehicle, "location": location, "time": str(datetime.now())},
    )
    # print(html_content)
    text_content = strip_tags(html_content)
    msg = EmailMultiAlternatives(subject, text_content, from_email, recipient_list)
    msg.attach_alternative(html_content, "text/html")
    msg.send()



location = "19.235,72.8598"
alert_mail('test_user', 'test_vehicle', location)
