---
layout: post
title: Creating a TreeView in GJS/Gtk+3.0
permalink: /2021/09/02/creating-a-treeview-in-gjs-gtk3-0/
date: 2021-09-01 23:52:00 +0000
categories: blog tutorial
tags: gtk javascript
---
Although I am quite familiar with Gtk from a user's perspective, I recently began to learn the library itself. I don't have a whole lot of experience with GUI frameworks, although I have developed [a rudimentary IDE for awesome window manager themes/configs](https://github.com/jechasteen/gratuitous). That project was done in Qt4, which has a lot of similarities to Gtk --- although I suppose all GUI libraries share similarities.

The project I'm currently working on needs to have a component that displays a nested tree for navigating documents. For the last week or so, I've been auditioning libraries in a couple different languages, namely C++ and Python. But just the other day, I discovered that there are JavaScript bindings to the entire Gnome family of libraries. They call this [GJS](https://gjs.guide/).

Unfortunately, the documentation for the bindings reference the C documentation and many of the examples to be found on the internet are either in C or Python. Although there are definitely some examples to be found out there, they do not cover the Gtk.TreeView object in the TreeModel form. Rather, the examples show ListModel implementations, which are very similar but do not require parent-child relationships. So, I've had to find my way on my own. Now, I'll share my findings...

Rather than a long winded explanation, I'll just share a simple example with comments.

[GitHub Gist](https://gist.github.com/jechasteen/66bedc60ac76868ddc3e019290773f7b)

    // You have to tell GJS which version of Gtk to target
    imports.gi.versions.Gtk = "3.0"
    
    const { GObject, Gtk } = imports.gi;
    Gtk.init(null);
    
    class MyWindow extends Gtk.Window {
        _init() {
            super._init({
                title: "My TreeView Example"
            });
            this._buildUI();
        }
        _buildUI() {
            // First, you have to create a TreeStore, which is like
            // a database for your tree data.
            this.store = new Gtk.TreeStore();
            this.store.set_column_types([GObject.TYPE_STRING]);
            // This creates the TreeModel on the TreeStore object
            this.store.filter_new(null);
    
            // Let's populate our tree with one set of parent/children
    
            // First, we have to create a new (empty) entry
            // We save the returned TreeIter as a reference for the
            // children Otherwise, if we don't need children, we could
            // simply call this.store.set_value(this.store.append(null), 0, "TEXT")
            let parent = this.store.append(null);
            // Then, we give that entry its data. The 0 here referring to the COLUMN
            // index in the array above "GObject.TYPE_STRING"
            this.store.set_value(parent, 0, "Parent");
    
            // Next, we create the children, using the parent TreeIter as the
            // argument to append (that is the parent argument)
            this.store.set_value(this.store.append(parent), 0, "Child 1");
            this.store.set_value(this.store.append(parent), 0, "Child 2");
    
            // Now that we have the store populated, we have to construct the view itself
            this.tree = new Gtk.TreeView({ model: this.store });
    
            // We have to create a renderer and column to actually do the work of 
            // presentation the  in the view. This will allow you to apply custom
            // styling or do operations on cells before presentation.
            this.renderer = new Gtk.CellRendererText();
            this.column = new Gtk.TreeViewColumn();
            this.column.pack_start(this.renderer, true);
            this.column.set_cell_data_func(
                this.renderer,
                // This function is where the styling/operations happen
                (col, cell, model, iter) => {
                    cell.editable = false;
                    cell.text 
                    = this.store.get_value(iter, 0);
                }
            );
            // Now we add the column to the tree
            this.tree.append_column(this.column);
            // If you need multiple columns, you will need to repeat this for each
    
            // Lastly, we add the view to the window.
            this.add(this.tree);
        }
    }
    
    // Start the application
    const App = GObject.registerClass(MyWindow);
    let win = new App();
    win.connect("delete-event", () => Gtk.main_quit());
    win.show_all();
    Gtk.main();
