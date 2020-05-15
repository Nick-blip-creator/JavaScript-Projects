import tkinter
from tkinter import *
from tkinter import filedialog
from tkinter.filedialog import askdirectory


class ParentWindow(Frame):
    def __init__ (self, master):
        Frame.__init__ (self)

        self.master = master
        self.master.resizable(width=False, height=False)
        self.master.geometry('{}x{}'.format(600, 200))
        self.master.title('Check Files')
        self.master.config()

        self.source = StringVar()
        self.destination = StringVar()

        self.filename = Button(self.master, text="Browse... ", command = self.getSource, width=10, height=1, font=("Helvetica", 10), fg="black")
        self.filename.grid(row=0,column=1,padx=(0,0), pady=(50,0))

        self.search = Button(self.master, text="Browse... ", command = self.getSource, width=10, height=1, font=("Helvetica", 10), fg="black")
        self.search.grid(row=1,column=1,padx=(0,0), pady=(10,0))

        self.search = Button(self.master, text="Check For Files ", height=2, font=("Helvetica", 10), fg="black")
        self.search.grid(row=2,column=1,padx=(10,0), pady=(15,0))

        self.txtFName = Entry(self.master,textvariable=self.source, font=("Helvetica", 10), width=60, fg="black", bg="white")
        self.txtFName.grid(row=0,column=4,columnspan=2,padx=(10,0), pady=(50,0))

        self.txtLName = Entry(self.master,textvariable=self.destination, font=("Helvetica", 10), width=60, fg="black", bg="white")
        self.txtLName.grid(row=1,column=4, columnspan=2,padx=(10,0), pady=(5,0))


    def getSource(self):
        search = askdirectory()
        self.source.set(search)
        

    

    


   
            

    








if __name__ == "__main__":
    root = Tk()
    App = ParentWindow(root)
    root.mainloop()
