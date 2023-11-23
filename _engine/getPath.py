from tkinter import filedialog
import sys

directory = filedialog.askdirectory()
print(directory)

sys.stdout.flush()
