some_text = '''hello\n
[something between square\n
and still some text\n
brackets, to see if it is working]\n
last time'''


def dropuntil(pred, text):
    """Drop until condition met. Last item dropped."""
    if pred(text.pop(0)):
        return dropuntil(pred, text)
    return text

def parse_text(text, accumulator=[]):
    if not text:
        return accumulator
    if '[' in text[0]:
        text.pop(0)
        text = list(dropuntil(lambda line: not ']' in line, text))

    accumulator.append(text[0])
    return parse_text(text[1:], accumulator)


print(parse_text(some_text.splitlines()))
