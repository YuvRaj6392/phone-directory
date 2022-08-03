import React, { Component } from 'react'
import AaaaBrowserDirectory from './AaaaBrowserDirectory'
export default class AaaaMain extends Component {
    constructor(){
        super();
        this.state={
            folderList:[
                
            ]
        }
    }
    addFolderHandler(newFolder)
    {
      const  folderList=this.state.folderList;
      if(folderList.length>0)
      {
        newFolder.id=folderList[folderList.length-1].id+1
      }
      else
      {
        newFolder.id=1;
      }
      folderList.push(newFolder)
      this.setState({
        folderList:folderList
      })
      console.log(this.state.folderList)

    }
  render() {
    return (
      <div>
            <AaaaBrowserDirectory addFolderHandler={this.addFolderHandler.bind(this)} showFolders={this.state.folderList}  />
      </div>
    )
  }
}
