from bs4 import BeautifulSoup as bs
import six
from google.cloud import translate_v2 as translate


def translate_list(target, text_list):
    final = []
    translate_client = translate.Client.from_service_account_json("translator-337216-ff6780003a2a.json")

    for text in text_list:
        if isinstance(text, six.binary_type):
            text = text.decode("utf-8")

        final.append(translate_client.translate(text, target_language=target)["translatedText"])

    return final


def translate_file(fileName="input.html"):
    with open(fileName) as file:
        soup = bs(file, "html.parser")
    raw = [text for text in soup.stripped_strings]
    final = translate_list("pt", raw)
    t = str(soup.prettify)
    for new, out in zip(raw, final):
        t = t.replace(new, out)
    t = t.rstrip(">")
    t = t.replace("<bound method Tag.prettify of ", "")
    print(t)

    with open("output.html", "w+") as file:
        file.write(t)

