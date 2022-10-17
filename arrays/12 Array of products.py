# Array Of Products

#1 
def arrayOfProducts(array):
    total = 1
    ans = []
    for i in array:
        total *= i

    for i, v in enumerate(array):
        if (v == 0):
            temp = 1
            for j in range(len(array)):
                if i != j:
                    temp *= array[j]
            ans.append(temp)
        else:
            ans.append(total/v)

    return ans

# 2
def arrayOfProducts(array):
    products = [1 for _ in range(len(array))]

    left = 1
    for i in range(len(array)):
        products[i] = left
        left *= array[i]

    right = 1
    for i in reversed(range(len(array))):
        products[i] *= right
        right *= array[i]

    return products