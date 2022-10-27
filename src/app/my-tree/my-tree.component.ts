import { Component, OnInit } from '@angular/core';
import { DataModel } from '../dataModel';
import { DataService } from '../Services/data.service';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

interface DataFlatNode {
  expandable: boolean,
  name: string,
  level: number,
  id: string,
  path: string
}

@Component({
  selector: 'app-my-tree',
  templateUrl: './my-tree.component.html',
  styleUrls: ['./my-tree.component.scss']
})
export class MyTreeComponent implements OnInit {
  data: DataModel[];
  expantionModel = new SelectionModel<string>(true)
  dragging = false;
  expandTimeout: any;
  expandDelay = 1000;
  validateDrop = false;


  private _transformer = (node: DataModel, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.value.en,
      level: level,
      id: String(node.value.taskId),
      path: node.value.path
    };
  };

  treeControl = new FlatTreeControl<DataFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private dataService: DataService) {
    this.data = []
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(value => {
      this.data = value.children
      // console.log(this.data)
      this.dataSource.data = this.data;
    })
  }

  hasChild = (_: number, node: DataFlatNode) => node.expandable;

  
  drop(event: CdkDragDrop<string[]>) {
    if (!event.isPointerOverContainer) {
      return;
    }
    
    if(event.currentIndex === event.previousIndex) {
      return;
    }
    
    const visibleNodes = this.visibleNodes();
    
    let changedData = this.dataSource.data
    
    
    const nodeAtDest = visibleNodes[event.currentIndex];
    const newSibiling = this.findSiblingNode(changedData, nodeAtDest.value.taskId)
    if (!newSibiling) {
      return;
    }
    const insertIndex = newSibiling.findIndex(item => item.value.taskId === nodeAtDest.value.taskId);
    
    const node = event.item.data;
    const sibiling = this.findSiblingNode(changedData, Number(node.id))
    const sibilingIndex = sibiling.findIndex(n => n.value.taskId === Number(node.id))
    const nodeToInsert: DataModel = sibiling.splice(sibilingIndex,1)[0];
    newSibiling.splice(insertIndex, 0, nodeToInsert)
    
    changedData = this.changePath(changedData, '')
    
    this.rebuildTreeForData(changedData)
  }
  
  visibleNodes(): DataModel[] {
    let result = [];

    function addExpandedChildren(node: DataModel, expanded: string[]){
      result.push(node);
      if (expanded.includes(String(node.value.taskId))) {
        console.log(expanded)
        node.children.map(child => addExpandedChildren(child, expanded))
      }
    }
    this.dataSource.data.forEach(node => {
      addExpandedChildren(node, this.expantionModel.selected)
    });
    return result;
  }

  findSiblingNode(arr:any[], id:number): Array<any> {
    let result, subResult;
    arr.forEach(item => {
      if (item.value.taskId === id ){
        result = arr;
      } else if (item.children) {
        subResult = this.findSiblingNode(item.children, id);
        if (subResult) result = subResult
      }
    });
    return result;
  }
  
  
  changePath(pathData: DataModel[], path:string): DataModel[] {
    let countPath = 1;
    pathData.forEach(item => {
      if (path.length === 0) {
        item.value.path = `${countPath}`
      } else {
        item.value.path = `${path}.${countPath}`
      }
      countPath +=1  
      if (item.children.length !== 0) {
        this.changePath (item.children,item.value.path)
      }
    })
    return pathData
  }

  rebuildTreeForData(data: any) {
    this.dataSource.data = data;
    this.expantionModel.selected.forEach((id) => {
        const node = this.treeControl.dataNodes.find((n) => n.id === id);
        this.treeControl.expand(node);
      });
  }



}
