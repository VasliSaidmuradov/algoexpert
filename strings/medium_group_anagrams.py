# Group Anagrams

# 1
def groupAnagrams(words):
  hash_map = {}

  for word in words:
    sorted_word = "".join(sorted(word))
    if sorted_word in hash_map:
      hash_map[sorted_word].append(word)
    else:
      hash_map[sorted_word] = [word] 

  return list(hash_map.values())