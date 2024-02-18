import sys
import json
import string

# Open text file passed as argument on command line
words_file = open(sys.argv[1], 'r')

# Read all lines of the file and stores it in word_list
word_list = words_file.readlines()

# Create a dictionary to store the words for each letter of the alphabet
selected_words = {letter: [] for letter in string.ascii_lowercase}

# Iterate over each word in the list and group them according to the initial letter
for index, word in enumerate(word_list):
    cleaned_word = word.strip()
    word_object = {"id": index + 1, "term": cleaned_word}
    first_letter = cleaned_word[0].lower()
    if first_letter in string.ascii_lowercase:  # Verify if letter is in alphabet
        selected_words[first_letter].append(word_object)  # Add the word to the corresponding group

selected_words_array = []

limit_words_per_letter = 50

# Select only 10 words of each alphabet letter
for letter in string.ascii_lowercase:
    selected_words_array.extend(selected_words[letter][:limit_words_per_letter])

words_file.close()

with open('words.json', 'w') as json_file:
    json.dump(selected_words_array, json_file, indent=4)

print("Arquivo 'words.json' foi criado com sucesso.")
