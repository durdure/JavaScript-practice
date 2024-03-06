# def insert_sort():
#     for i in range(1, len(arr)):
#         j = i
#         while arr[j-1] > arr[j]  and j>0:
#             arr[j-1], arr[j] = arr[j], arr[j-1]
#             j-=1
#     print(arr)



# arr = [5, 2, 4, 6, 1, 3]
# insert_sort(arr)

def insert_hack():
    key = arr(n-2)
    i = n-1
    for i in range(1, n):
        while i>=0 and key < arr[i+1]:
            key = arr[i+1]
            print(*arr)
        key = arr[i+1]
        print(*arr)

n = int(input.strip())
arr= map(int, input().strip())
